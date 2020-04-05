import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mentions = [
    'Angular',
    'Git',
    'Love',
  ];
  visibleMention: string[];
  visibleMentionIndex = 0;
  isIconVisible = true;
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    this.mentions.forEach(mention => {
      mention = mention.toLowerCase();
      iconRegistry.addSvgIcon(mention, sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${mention}.svg`));
    });
  }
  ngOnInit(): void {
    this.visibleMention = this.mentions[this.visibleMentionIndex].split('');
    setInterval(() => {
      this.isIconVisible = false;
      this.applyDeleteEffect();
    }, 6000);
  }
  ngAfterViewInit(): void {
    this.isIconVisible = true;
  }
  applyDeleteEffect() {
    this.visibleMention.pop();
    if (this.visibleMention.length > 0) {
      setTimeout(() => this.applyDeleteEffect(), 80);
    } else {
      this.visibleMention = [];
      this.visibleMentionIndex < this.mentions.length - 1
        ? this.visibleMentionIndex++
        : this.visibleMentionIndex = 0;
      this.applyTypeEffect(this.mentions[this.visibleMentionIndex].split(''));
    }
  }
  applyTypeEffect(newMention: string[]) {
    const char = newMention.shift();
    if (typeof char === 'string') {
      this.visibleMention.push(char);
      setTimeout(() => this.applyTypeEffect(newMention), 80);
    } else {
      this.isIconVisible = true;
    }
  }
}
