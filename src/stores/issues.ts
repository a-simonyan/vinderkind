import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue';
import axios from 'axios';

export const useIssuesStore = defineStore('issues', () => {
  const lastIssues = ref([]);
  const allIssues = ref([]);

  const fetchIssues = async () => {
    try {
      const allIssuesResponse = await axios.get('https://staging.vinderkind.com/api/issues');
      allIssues.value = allIssuesResponse.data.data;
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  };

  const fetchLastIssues = async () => {
    try {
      const response = await axios.get('https://staging.vinderkind.com/api/issues/latest');
      lastIssues.value = response.data; 
    } catch (error) {
      console.error('Error fetching last Issues:', error);
    }
  };

  onMounted(fetchIssues);
  onMounted(fetchLastIssues);

  return { allIssues, lastIssues, fetchIssues, fetchLastIssues };
});
