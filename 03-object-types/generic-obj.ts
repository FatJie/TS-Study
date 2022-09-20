// 泛型对象类型
interface NumBox {
  content: number
}
interface StrBox {
  content: string
}
function setContent(box: NumBox, newContent: number): void
function setContent(box: StrBox, newContent: string): void
function setContent(box: { content: number | string }, newContent: number | string) {
  box.content = newContent
}


interface Box<Type> {
  contents: Type
}
const box: Box<string> = {
  contents: '10000'
}


type BoxType<Type> = {
  content: Type
}

type Type1<Type> = Type | null
type Type2<Type> = Type | Type[]
type Type3<Type> = Type1<Type2<Type>>
type Type4 = Type3<string>