import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: false,
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  // Settings data bound to form
  settings = {
    username: '',
    email: '',
    phone: '',
    notifications: false,
    dataSharing: false,
    profileImage: '' // Add this property to hold the image URL
  };

  // Method to handle saving of settings
  onSaveSettings() {
    console.log('Settings Saved:', this.settings);
    // Implement service call to save these settings to a backend API
  }

  // Method to handle image change
  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.settings.profileImage = e.target.result; // Set the image preview URL
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
