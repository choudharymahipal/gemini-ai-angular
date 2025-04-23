import { Component } from '@angular/core';
import { GeminiService } from '../../Services/gemini.service';

@Component({
  selector: 'app-ai-query',
  templateUrl: './ai-query.component.html',
  styleUrl: './ai-query.component.scss'
})
export class AiQueryComponent {
  userQuery: string = '';
  aiResponse: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private geminiService: GeminiService) {}

  submitQuery() {
    if (!this.userQuery.trim()) return;

    this.isLoading = true;
    this.errorMessage = '';

    this.geminiService.getGeminiResponse(this.userQuery).subscribe(
      (response) => {
        try {
          const candidates = response.candidates || [];
          if (candidates.length > 0 && candidates[0].content?.parts?.length > 0) {
            this.aiResponse = candidates[0].content.parts[0].text.trim();
          } else {
            this.aiResponse = 'No meaningful response from AI.';
          }
        } catch (error) {
          this.aiResponse = 'Error parsing AI response.';
        }
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to get AI response.';
        this.isLoading = false;
      }
    );
  }
}
