import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Platform, ModalController } from '@ionic/angular';

@Component({
	selector: 'app-accounts',
	templateUrl: './accounts.page.html',
	styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {
	accounts: any = [];
	filteredAccounts: any = [];
	addingSocialNetworks: any = ['Twitter', 'Instagram', 'Facebook', 'Snapchat', 'Twitch', 'Discord', 'Google'];
	socialNetworks: any = ['Any', 'Twitter', 'Instagram', 'Facebook', 'Snapchat', 'Twitch', 'Discord', 'Google'];
	datePublished: any = ['Any', 'Today', 'Yesterday', 'Last 7 days', 'Last 30 days', 'Last 90 days'];
	hasMFA: any = ['Yes', 'No', 'All'];
	filters = {
		discord_user: '',
		socials: [] as string[],
		email: '',
		date: '',
		has_mfa: 'All',
	};
	isFilterModalOpen: boolean = false;
	isAddAccountModalOpen: boolean = false;
	isDisplayAccountModalOpen: boolean = false;


	newAccount: any = {
		social: '',
		email: '',
		username: '',
		password: '',
		discord_user: '',
		requires_mfa: false,
	}
	currentDisplayedAccount: any = {};


	constructor(private apiService: ApiService, private platform: Platform, private modalController: ModalController) {}

	async ngOnInit() {
		this.accounts = await this.apiService.getSocials();
		this.filteredAccounts = [...this.accounts];

		this.platform.backButton.subscribeWithPriority(10, () => {
			this.handleBackButton();
		});
	}

	isDateInRange(date: Date, range: string): boolean {
		const today = new Date();
		switch (range) {
			case 'Today':
				return date.toDateString() === today.toDateString();
			case 'Yesterday':
				const yesterday = new Date(today);
				yesterday.setDate(today.getDate() - 1);
				return date.toDateString() === yesterday.toDateString();
			case 'Last 7 days':
				const last7Days = new Date(today);
				last7Days.setDate(today.getDate() - 7);
				return date >= last7Days && date <= today;
			case 'Last 30 days':
				const last30Days = new Date(today);
				last30Days.setDate(today.getDate() - 30);
				return date >= last30Days && date <= today;
			case 'Last 90 days':
				const last90Days = new Date(today);
				last90Days.setDate(today.getDate() - 90);
				return date >= last90Days && date <= today;
			default:
				return true;
		}
	}

	addAccount() {
		this.apiService.uploadSocial(
			this.newAccount.social,
			this.newAccount.email,
			this.newAccount.username,
			this.newAccount.password,
			this.newAccount.discord_user,
			this.newAccount.requires_mfa
		);
		this.accounts.push({ ...this.newAccount, date_added: new Date() });
		this.filterAccounts();
		this.newAccount = {
			social: '',
			email: '',
			username: '',
			password: '',
			discord_user: '',
			requires_mfa: false,
		};
		this.setAccountModalOpen(false);
	}


	applyFilters() {
		this.filterAccounts();
	}

	filterAccounts() {
		this.filteredAccounts = this.accounts.filter((account: any) => {
			return (
				(this.filters.discord_user
					? account.discord_user
							.toLowerCase()
							.includes(this.filters.discord_user.toLowerCase())
					: true) &&
				(this.filters.socials.length > 0
					? this.filters.socials.includes(account.social) || this.filters.socials.includes('Any')
					: true) &&
				(this.filters.email
					? account.email
							.toLowerCase()
							.includes(this.filters.email.toLowerCase())
					: true) &&
				(this.filters.date
					? this.isDateInRange(new Date(account.created_at), this.filters.date)
					: true) &&
				(this.filters.has_mfa
					? this.filters.has_mfa === 'Yes'
						? account.requires_mfa
						: this.filters.has_mfa === 'No'
						? !account.requires_mfa
						: true
					: true)
			);
		});
		this.setFilterModalOpen(false);
	}

	setFilterModalOpen(isOpen: boolean) {
		this.isFilterModalOpen = isOpen;
	}

	setAccountModalOpen(isOpen: boolean) {
		this.isAddAccountModalOpen = isOpen;
	}

	setDisplayAccountModalOpen(isOpen: boolean) {
		this.isDisplayAccountModalOpen = isOpen;
	}


	viewAccountDetails(account: any) {
		this.currentDisplayedAccount = account;
		this.setDisplayAccountModalOpen(true);
	}


	copyToClipboard(text: string) {
		navigator.clipboard.writeText(text);
	}

	async handleBackButton() {
		// Check if modals are open and dismiss them properly
		if (this.isFilterModalOpen) {
			await this.modalController.dismiss('filterModal');
			this.isFilterModalOpen = false;
		} else if (this.isAddAccountModalOpen) {
			await this.modalController.dismiss('addAccountModal');
			this.isAddAccountModalOpen = false;
		} else if (this.isDisplayAccountModalOpen) {
			await this.modalController.dismiss('displayAccountModal');
			this.isDisplayAccountModalOpen = false;
		} else {
			return;
		}
	}

	handleRefresh(event: any) {
		this.apiService.getSocials().then((accounts) => {
			this.accounts = accounts;
			this.filterAccounts();
			event.target.complete();
		});
	}

}
