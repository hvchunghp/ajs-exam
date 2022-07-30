import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css'],
})
export class SentComponent implements OnInit {
  sent = [
    {
      avt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-IaGgfx8si0t9VePECDdAQdnb0D1z8HgUXjBQfpn-smN_ZzIzY_wGe-eCZ-TKW_hHHE&usqp=CAU',
      name: 'Nguyễn thế An',
      subject: 'Application for Job Title',
      mess: 'Hi Bro,',
    },
    {
      avt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-IaGgfx8si0t9VePECDdAQdnb0D1z8HgUXjBQfpn-smN_ZzIzY_wGe-eCZ-TKW_hHHE&usqp=CAU',
      name: 'Trần Thị Thúy',
      subject: 'Apology for late response email',
      mess: 'Chào Chung,',
    },
    {
      avt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-IaGgfx8si0t9VePECDdAQdnb0D1z8HgUXjBQfpn-smN_ZzIzY_wGe-eCZ-TKW_hHHE&usqp=CAU',
      name: 'Phạm Thành Long',
      subject: 'Assistant Marketing Department',
      mess: 'Chào,',
    },
    {
      avt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-IaGgfx8si0t9VePECDdAQdnb0D1z8HgUXjBQfpn-smN_ZzIzY_wGe-eCZ-TKW_hHHE&usqp=CAU',
      name: 'Hoàng Văn Nam',
      subject: 'Anything I can help with',
      mess: 'Hello,',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
