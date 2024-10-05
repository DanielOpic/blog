import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  // Przykładowe wpisy blogowe
  getPosts(): Post[] {
    return [
      {
        id: 1,
        title: 'Pierwszy wpis na blogu',
        imageUrl: 'https://via.placeholder.com/150',
        date: '2024-10-01',
        description: 'Krótki opis pierwszego wpisu na blogu.',
      },
      {
        id: 2,
        title: 'Drugi wpis na blogu',
        imageUrl: 'https://via.placeholder.com/150',
        date: '2024-10-02',
        description: 'Krótki opis drugiego wpisu na blogu.',
      },
      {
        id: 3,
        title: 'Trzeci wpis na blogu',
        imageUrl: 'https://via.placeholder.com/150',
        date: '2024-10-03',
        description: 'Krótki opis trzeciego wpisu na blogu.',
      },
    ];
  }
}