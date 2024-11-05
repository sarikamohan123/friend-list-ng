import { Component, OnInit } from '@angular/core';
import { Friend } from '../../model/Friend';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrl: './friends-list.component.css'
})
export class FriendsListComponent implements OnInit {
  friends: Friend[] = [];// initializing the array
  newfriend: Friend = new Friend();
  //implementing interface
  ngOnInit(): void {
    this.friends = [
      new Friend("Sue", 75, "sue@hotmail.com", true),
      new Friend("Lekha", 45, "lekha@yahoo.com", false),
      new Friend("Arti", 40, "arti@yahoo.com", true),
      new Friend("Annie", 47, "annie@gmail.com", false),
      new Friend("julie", 50, "julie@yahoo.com", false),

    ];

  }
  addFriend(): void {
    this.friends?.push(this.newfriend);
    this.newfriend = new Friend();

  }
  delete(idx: number): void {
    this.friends?.splice(idx, 1);

  }

}
