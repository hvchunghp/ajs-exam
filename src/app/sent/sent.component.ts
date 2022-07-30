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
      mess: 'Hi An,',
    },
    {
      avt: 'https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-%C4%91%E1%BA%A1i-di%E1%BB%87n-FB-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-n%E1%BB%AF.jpg',
      name: 'Trần Thị Thúy',
      subject: 'Apology for late response email',
      mess: 'Chào bạn,',
    },
    {
      avt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-IaGgfx8si0t9VePECDdAQdnb0D1z8HgUXjBQfpn-smN_ZzIzY_wGe-eCZ-TKW_hHHE&usqp=CAU',
      name: 'Phạm Thành Long',
      subject: 'Assistant Marketing Department',
      mess: 'Hi Long,',
    },
    {
      avt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-IaGgfx8si0t9VePECDdAQdnb0D1z8HgUXjBQfpn-smN_ZzIzY_wGe-eCZ-TKW_hHHE&usqp=CAU',
      name: 'Hoàng Văn Nam',
      subject: 'Anything I can help with',
      mess: 'Hello Nam,',
    },
    {
      avt: 'https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-%C4%91%E1%BA%A1i-di%E1%BB%87n-FB-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-n%E1%BB%AF.jpg',
      name: 'Trương Thu Thủy',
      subject: 'Send document',
      mess: 'Chào bạn,',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
