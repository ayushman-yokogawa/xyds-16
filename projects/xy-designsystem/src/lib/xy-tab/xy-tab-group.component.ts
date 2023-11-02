import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
} from "@angular/core";
import { XyTabComponent } from "./xy-tab.component";

interface XyTabItem {
  icon?: string;
  label: string;
  hide?: boolean;
  disabled?: boolean;
  content?: any;
  controls?: boolean;
  ariaLabel?: string;
  ariaLabelledby?: string;
}

@Component({
  selector: "xy-tab-group",
  templateUrl: "./xy-tab-group.component.html",
  styleUrls: ["./xy-tab-group.component.scss"],
})
export class XyTabGroupComponent {
  _disabled: boolean = false;
  event!: XyTabComponent;
  @Input() controls: boolean = false;
  tabChange: any;
  tabPosition: number = 0;
  maxTabPosition!: number;
  activeTabIndex: number = -1;

  ngOnInit(): void {
    this.updateMaxTabPosition();
  }
  scrollTabs(direction: number): void {
    const tabContainer = document.querySelector('.tabs-container');
    const tabWidth = 120; 

    if (tabContainer) {
      this.tabPosition += direction * tabWidth;

      if (this.tabPosition > 0) {
        this.tabPosition = 0;
      } else if (this.tabPosition < -this.maxTabPosition) {
        this.tabPosition = -this.maxTabPosition;
      }
    }
  }
  private updateMaxTabPosition(): void {
    const tabContainer = document.querySelector('.tabs-container');
    const tabs = document.querySelectorAll('.tab');

    if (tabContainer && tabs.length > 0) {
      const containerWidth = tabContainer.clientWidth;
      const tabsWidth = tabs[0].clientWidth * this.tabs.length;

      this.maxTabPosition = tabsWidth - containerWidth;
    }
  }

  @Input() set disabled(s: string | boolean) {
    this._disabled = s == true || s == "true" || s == "disabled" || s === "";
  }
  get disabled(): boolean {
    return this._disabled;
  }

  @ContentChildren(XyTabComponent) tabs!: QueryList<XyTabComponent>;
  @ViewChild("tabsContainer") tabsContainer!: ElementRef;
  @ViewChild("tabsList") tabsList!: ElementRef;

  constructor() {}

  ngAfterContentInit() {
    console.log(this.tabs);
    const activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: XyTabComponent) {
    this.tabs.toArray().forEach((tab) => (tab.active = false));
    tab.active = true;
    this.tabChange.emit(tab);
  }

  goToPreviousTab(): void {
    const tabArray = this.tabs.toArray(); // Convert QueryList to array
    const currentTabIndex = tabArray.findIndex((tab) => tab.active === true);
    if (currentTabIndex > 0) {
      const previousTab = tabArray[currentTabIndex - 1];
      this.selectTab(previousTab);
      this.scrollTabIntoView(previousTab);
    }
  }

  goToNextTab(): void {
    const tabArray = this.tabs.toArray(); // Convert QueryList to array
    const currentTabIndex = tabArray.findIndex((tab) => tab.active === true);
    if (currentTabIndex < tabArray.length - 1) {
      const nextTab = tabArray[currentTabIndex + 1];
      this.selectTab(nextTab);
      this.scrollTabIntoView(nextTab);
    }
  }

  isFirstTabActive(): boolean {
    const tabArray = this.tabs.toArray(); // Convert QueryList to array
    return tabArray.findIndex((tab) => tab.active === true) === 0;
  }

  isLastTabActive(): boolean {
    const tabArray = this.tabs.toArray(); // Convert QueryList to array
    const lastTabIndex = tabArray.length - 1;
    return tabArray.findIndex((tab) => tab.active === true) === lastTabIndex;
  }

  scrollTabIntoView(tab: XyTabComponent): void {
    const containerElement = this.tabsContainer.nativeElement;
    const tabElement = tab.elementRef.nativeElement;
    const containerWidth = containerElement.offsetWidth;
    const tabOffsetLeft = tabElement.offsetLeft;
    const tabWidth = tabElement.offsetWidth;
    const scrollLeft = containerElement.scrollLeft;

    if (tabOffsetLeft < scrollLeft) {
      containerElement.scroll({
        left: tabOffsetLeft,
        behavior: "smooth",
      });
    } else if (tabOffsetLeft + tabWidth > scrollLeft + containerWidth) {
      containerElement.scroll({
        left: tabOffsetLeft + tabWidth - containerWidth,
        behavior: "smooth",
      });
    }
  }
}
