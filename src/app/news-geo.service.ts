import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsGeoService {
  
  titles = [
    {name: "Госдума одобрила уголовное наказание за увольнение предпенсионеров"},
    {name: '«Росбалт»: ФСБ проверяет утечку личных данных Петрова и Боширова'},
    {name: 'Новый глава Владимирской области посоветовал Орловой уехать из региона'},
    {name: 'Глава ПФР рассказал об использовании зданий фонда'},
    {name: 'Bloomberg рассказал о готовности Абрамовича продать «Челси» за £3 млрд'}
  ];

  getTitles() {
    return this.titles;
  }
  constructor() { }

}
