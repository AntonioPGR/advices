declare interface RandomAdvice{
  "slip": {
    "id": number,
    "advice": string
  }
}

declare interface AdviceWithDate{
  date: string
  advice: string,
  id: number
}

declare interface SearchedAdvices{
  total_results: string,
  query: string,
  slips: AdviceWithDate[]
}

declare interface NotFoundAdvices{
  "message": {
    "type": string,
    "text": string
  }
}