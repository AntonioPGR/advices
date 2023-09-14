declare interface getPropsReturn<T>{
  props: T
}

declare interface HomeProps{
  advice: RandomAdvice
}

declare interface SearchProps{
  results: SearchedAdvices | NotFoundAdvices
}