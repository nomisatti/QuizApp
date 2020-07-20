
export type Questions = {
category: string;
correct_answer: string;
difficulty: string
incorrect_answers: string[];
question: string;
type: string;
}

// merge Incorrect Answers Array 

export type QuestionState  =  Questions & {answers : string[]};

export enum  Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const FetchQuiz = async (settings: any) =>{
    const amount = settings.totalQuestions? settings.totalQuestions : 10;
    const difficulty = settings.difficulty?settings.difficulty : '';
    const type = settings.type ? settings.type : '';
    const category = settings.category ? settings.category: '';

    console.log(typeof settings)
    let url =`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}&&category=${category}
     `;
  
        url += ``

    console.log("Url :" , url)
     
     const fetchedData = await (await fetch(url)).json();
     return fetchedData.results.map((questions: Questions) => ( {
        ...questions ,
        answers:shuffleArray([...questions.incorrect_answers, questions.correct_answer])

     }))

}


// Shuffle Array

  const shuffleArray = (array : any[]) =>  [...array ].sort (()=> Math.random() -0.5)