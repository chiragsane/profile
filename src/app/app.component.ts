import { Component, ViewChild, ElementRef, Renderer2, OnInit, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  name = 'ChiragSane';
  links = [
    'About Me',
  ];
  mentions = [
    'Angular',
    'Git',
    'Love',
  ];
  visibleMention: string[];
  visibleMentionIndex = 0;
  @ViewChild('mentionIcon') mentionIcon: ElementRef;
  constructor(private renderer: Renderer2) { }
  ngOnInit(): void {
    this.visibleMention = this.mentions[this.visibleMentionIndex].split('');
    setInterval(() => {
      this.renderer.setStyle(this.mentionIcon.nativeElement, 'opacity', 0);
      this.applyDeleteEffect();
    }, 4000);
  }
  ngAfterViewInit(): void {
    this.showMentionIcon();
  }
  applyDeleteEffect() {
    this.visibleMention.pop();
    this.visibleMention.length > 0
      ? setTimeout(() => this.applyDeleteEffect(), 80)
      : this.changeVisibleMention();
  }
  changeVisibleMention() {
    this.visibleMentionIndex < this.mentions.length - 1
      ? this.visibleMentionIndex++
      : this.visibleMentionIndex = 0;
    this.applyTypeEffect(this.mentions[this.visibleMentionIndex].split(''));
  }
  applyTypeEffect(newMention: string[]) {
    const char = newMention.shift();
    if (typeof char === 'string') {
      this.visibleMention.push(char);
      setTimeout(() => this.applyTypeEffect(newMention), 80);
    } else {
      this.showMentionIcon();
    }
  }
  showMentionIcon() {
    this.renderer.removeStyle(this.mentionIcon.nativeElement, 'background-image');
    this.renderer.setStyle(this.mentionIcon.nativeElement, 'opacity', 1);
    this.renderer.setStyle(
      this.mentionIcon.nativeElement,
      'background-image',
      `url("assets/icons/${this.visibleMention.join('').toLowerCase()}.svg")`
    );
  }
}
