import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../../../models/job';
import { ClientPagination } from '../../../types/client-pagination';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppJobsService {

  constructor(
    private http: HttpClient
  ) { }

  getJobs(pagination: ClientPagination) {
    return this.http.get('job', {
      params: {
        page: pagination.page.toString(),
        perPage: pagination.perPage.toString()
      }
    }).pipe(
      map((response: any) => {
        return {
          data: response.data.map((job: any) => new Job(job)),
          meta: response.meta
        };
      })
    );
  }

  getJobDetails(jobId: string) {
    return this.http.get(`job/${jobId}`)
      .pipe(
        map((response: any) => {
          return {
            job: new Job(response.data)
          };
        
        })
      );
  }

  markJobAsComplete(jobId: string) {
    return this.http.post(`job/${jobId}/mark-as-complete`, {})
      .pipe(
        map((response: any) => response)
      );
  }
}
