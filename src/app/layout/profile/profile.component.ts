import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile: any;
  userRole: string = '';

  private sampleUserData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '076 3242528',
    profilePicture: 'https://via.placeholder.com/150',  // Placeholder image URL
    role: 'administrator' // Can be changed to other roles
  };

  constructor() {}

  ngOnInit(): void {
    this.userProfile = this.sampleUserData;
    this.userRole = this.userProfile.role;
  }

  editProfile() {
    console.log('Edit profile functionality goes here');
  }
}
