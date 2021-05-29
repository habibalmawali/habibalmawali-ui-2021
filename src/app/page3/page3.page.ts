import { Component, OnInit } from '@angular/core';

export class Day {
  public number: number;
  public year: number;
  public month: string;
  public monthIndex: number;
  public weekDayName: string;
  public weekDayNumber: number;
}

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})

export class Page3Page implements OnInit {

  currentYear: number;
  currentMonthIndex: number;

  monthDays: Day[];

  monthNumber: number;
  year: number;

  weekDaysName = [];

  constructor() { 
    let date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonthIndex = date.getMonth(); 
  }

  getCurrentMonth(): Day[] {
    return this.getMonth(this.currentMonthIndex, this.currentYear);
  }

  getMonth(monthIndex: number, year: number): Day[] {
    let days = [];

    let firstday = this.createDay(1, monthIndex, year);

    //create empty days
    for (let i = 1; i < firstday.weekDayNumber; i++) {
      days.push({
        weekDayNumber: i,
        monthIndex: monthIndex,
        year: year,
      } as Day);
    }
    days.push(firstday);
    //

    let countDaysInMonth = new Date(year, monthIndex +1, 0).getDate();
    for (let i = 1; i < countDaysInMonth +1; i++) {
      days.push(this.createDay(i, monthIndex, year));
    }

    return days;
  }

  getMonthName(monthIndex: number): string {
    switch (monthIndex) {
      case 0:
        return "January";      
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";

      default:
        return "";
    }
  }

  getWeekDayName(weekDay: number): string {
    switch (weekDay) {
      case 0:
        return "Su"; // Sunday
      case 1:
        return "Mo"; // Monday
      case 2:
        return "Tu"; // Tuesday
      case 3:
        return "We"; // Wednesday
      case 4:
        return "Th"; // Thursday
      case 5:
        return "Fr"; // Friday
      case 6:
        return "Sa"; // Saturday

      default:
        return "";
    }
  }

  createDay(dayNumber: number, monthIndex: number, year: number) {
    let day = new Day();

    day.monthIndex = monthIndex;
    day.month = this.getMonthName(monthIndex);

    day.number = dayNumber;
    day.year = this.currentYear;

    day.weekDayNumber = new Date(year, monthIndex, dayNumber).getDay();
    day.weekDayName = this.getWeekDayName(day.weekDayNumber);

    return day;
  }

  ngOnInit() {
    this.setMonthDays(this.getCurrentMonth());

    this.weekDaysName.push("Su");
    this.weekDaysName.push("Mo");
    this.weekDaysName.push("Tu");
    this.weekDaysName.push("We");
    this.weekDaysName.push("Th");
    this.weekDaysName.push("Fr");
    this.weekDaysName.push("Sa");
    
  }

  onNextMonth() {
    this.monthNumber++;

    if (this.monthNumber == 13) {
      this.monthNumber = 1;
      this.year++;
    }

    this.setMonthDays(this.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth() {
    this.monthNumber--;

    if (this.monthNumber < 1) {
      this.monthNumber = 12;
      this.year--;
    }

    this.setMonthDays(this.getMonth(this.monthNumber, this.year));
  }

  setMonthDays(days: Day[]) {
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
  }

  
}
