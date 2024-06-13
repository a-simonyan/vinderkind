import { defineStore } from 'pinia'
import { ref } from 'vue';
import { fetchData } from '@/api/query';

export const useIssuesStore = defineStore('issues', () => {
  const lastIssues = ref([]);
  const allIssues = ref([]);

  const fetchIssues = async () => {
    try {
      const allIssuesResponse:any = await fetchData('issues', 'get');
      allIssues.value = allIssuesResponse?.data.data;
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  };

  const fetchLastIssues = async () => {
    try {
      const response:any = await fetchData('issues/latest', 'get');
      lastIssues.value = response?.data; 
    } catch (error) {
      console.error('Error fetching last Issues:', error);
    }
  };

  return { allIssues, lastIssues, fetchIssues, fetchLastIssues };
});
