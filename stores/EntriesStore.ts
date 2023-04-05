import { defineStore } from 'pinia';

export const useEntriesStore = defineStore('entries', {
    state: () => ({
        isLoading: true,
        entries: [],
        articles: [],
        totalResults: 0,

    }),
    actions: {
        async getEntries() {

            const baseUrl = 'https://alexis-code-default-rtdb.firebaseio.com/entries.json';

            try {

                const resp = await fetch(baseUrl)
                    .then(response => response.json())
                    
                    this.entries = resp;
                    this.isLoading = false;

                    return;
                
                
            } catch (error) {
                console.log(error);
                
            }
        },
         async getNews() {

            const baseUrl = 'https://newsapi.org/v2/everything?' +
            'q=silicon-valley&' +
            'from=2023-03-05&' +
            'sortBy=popularity&' +
            'language=es&' +
            'apiKey=72d203c0866b43dab71e522cac7ffe74';

            try {
                
                const resp = await fetch(baseUrl)
                    .then(response => response.json())

                    const { totalResults, articles } = resp;

                    this.articles = articles;
                    this.totalResults = totalResults;
                    this.isLoading = false;

                    console.log(resp);
                    

                    return;
            } catch (error) {
                console.log(error);
                
            }

         }
    },
    getters: {
        getIsLoading() {
            console.log(this.entries);
            return this.isLoading;
        },
        getFirebaseEntries() {
            console.log(this.entries);
            
            return this.entries;
        },
        getArticles() {
            console.log(this.articles);

            return this.articles;
            
        },
        getTotalArticles() {
            return this.totalResults;
        }
    }
})