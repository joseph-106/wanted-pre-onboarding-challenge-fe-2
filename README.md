## [챌린지 과제 가이드](https://gist.github.com/pocojang/3c3d4470a3d2a978b5ebfb3f613e40fa)

### 👀 Todo 앱을 JSDoc으로 문서화해보자

- todolistData
  - 할 일 목록의 데이터 객체를 담는 배열입니다
  - 태그들은 `Nullable type`으로 처리했습니다

```
/**
* 필요한 데이터를 모두 모델링한다.
* @type {{id: string, content: string, completed: boolean, category: string, tags?: string[]}[]}
*/
```

- createTodo
  - 할 일을 추가하는 함수입니다
  - 태그들은 `Optional parameter`로 처리했습니다

```
/**
* 할 일을 추가할 수 있다.
* 내용 없이 추가할 수 없다.
* @param {string} content
* @param {string} category
* @param {string[]} [tags]
*/

```

- readTodo
  - 할 일을 조회하는 함수입니다
  - 아이디는 `Optional parameter`로 처리했습니다
  - 아이디가 존재한다면 특정 할 일을 반환하고, 없다면 모든 할 일을 반환합니다

```
/**
* 모든 할 일을 조회할 수 있다.
* ID를 기반으로 특정 할 일을 조회할 수 있다.
* @param {string} [id]
* @returns {{id: string, content: string, completed: boolean, category: string, tags?: string[]}[] | {id: string, content: string, completed: boolean, category: string, tags?: string[]}}
*/

```

- updateTodo
  - 할 일을 수정하는 함수입니다
  - 특정 태그도 수정하는 경우 태그 위치를 `Optional parameter`로 가집니다

```
/**
* ID를 제외한 모든 속성을 수정할 수 있다.
* 특정 할 일의 특정 태그를 수정할 수 있다.
* @param {string} id
* @param {number} [tagIndex]
*/

```

- deleteTodo
  - 할 일을 삭제하는 함수입니다
  - 특정 할 일만 삭제하는 경우 아이디를 `Optional parameter`로 가집니다
  - 특정 할 일의 특정 태그만 삭제하는 경우 태그 위치를 `Optional parameter`로 가집니다

```
/**
* ID를 기반으로 특정 할 일을 삭제할 수 있다.
* 모든 할 일을 제거할 수 있다.
* 특정 할 일의 특정 태그를 삭제할 수 있다.
* 특정 할 일의 모든 태그를 제거할 수 있다.
* @param {string} [id]
* @param {number} [tagIndex]
*/

```
