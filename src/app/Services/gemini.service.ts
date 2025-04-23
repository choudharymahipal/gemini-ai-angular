import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  private apiKey = environment.geminiApiKey;
  private apiUrl = environment.geminiApiUrl;

  constructor(private http: HttpClient) {}

  getGeminiResponse(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    };

    const url = `${this.apiUrl}?key=${this.apiKey}`;

    return this.http.post<any>(url, body, { headers });
  }
}
