import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  user = [
    {
      avt: 'https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-%C4%91%E1%BA%A1i-di%E1%BB%87n-FB-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-n%E1%BB%AF.jpg',
      name: 'Nguyễn Thị Kim Chi',
      subject: 'Apology for late response email',
      mess: 'Hello Chung,',
    },
    {
      avt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-IaGgfx8si0t9VePECDdAQdnb0D1z8HgUXjBQfpn-smN_ZzIzY_wGe-eCZ-TKW_hHHE&usqp=CAU',
      name: 'Nguyễn Việt Anh',
      subject: 'Application for Job Title',
      mess: 'Hi Chung,',
    },
    {
      avt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-IaGgfx8si0t9VePECDdAQdnb0D1z8HgUXjBQfpn-smN_ZzIzY_wGe-eCZ-TKW_hHHE&usqp=CAU',
      name: 'Nguyễn Văn A',
      subject: 'Anything I can help with',
      mess: 'Hello,',
    },
    {
      avt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-IaGgfx8si0t9VePECDdAQdnb0D1z8HgUXjBQfpn-smN_ZzIzY_wGe-eCZ-TKW_hHHE&usqp=CAU',
      name: 'Nguyễn Văn B',
      subject: 'Assistant Marketing Department',
      mess: 'Hi,',
    },
  ];
  ngOnInit(): void {}
}
