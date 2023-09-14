declare interface RandomAdvice{
  "slip": {
    "id": number,
    "advice": string
  }
}

declare interface AdviceWithDate extends RandomAdvice{
  date: string
}

declare interface SearchedAdvice{
  "total_results": string,
  "query": string,
  "slips": AdviceWithDate[]
}