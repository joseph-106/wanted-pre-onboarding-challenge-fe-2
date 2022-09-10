## [챌린지 과제 가이드](https://gist.github.com/pocojang/3c3d4470a3d2a978b5ebfb3f613e40fa)

### 👀 Todo 앱을 JSDoc으로 문서화해보자

- todoDataList

```
/**
 * @typedef todoData
 * @type {Object}
 * @property {string} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} completed - 완료여부
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 태그들
 */

/**
 * 할 일 목록의 데이터 객체를 담는 배열입니다.
 * @type {Array<todoData>}
 */
```

- createTodo
  - 할 일을 추가할 수 있다
  - 내용없이 추가할 수 없다

```
 * 할 일을 추가하는 함수입니다.
 * @param {string} content - 내용
 * @param {string} category - 카테고리
 * @param {string[]} [tags] - 태그들

```

- readTodo
  - 모든 할 일을 조회할 수 있다
  - ID를 기반으로 특정 할 일을 조회할 수 있다

```
/**
 * 할 일을 조회하는 함수입니다.
 * @param {string} [id] - 아이디
 * @returns {Array<todoData> | todoData} - 데이터
 */

```

- updateTodo
  - ID를 제외한 모든 속성을 수정할 수 있다
  - 특정 할 일의 특정 태그를 수정할 수 있다

```
/**
 * 할 일을 수정하는 함수입니다.
 * @param {string} id - 아이디
 * @param {number} [tagIndex] - 태그 위치
 */

```

- deleteTodo
  - ID를 기반으로 특정 할 일을 삭제할 수 있다
  - 모든 할 일을 제거할 수 있다
  - 특정 할 일의 특정 태그를 삭제할 수 있다
  - 특정 할 일의 모든 태그를 제거할 수 있다

```
/**
 * 할 일을 삭제하는 함수입니다.
 * @param {string} [id] - 아이디
 * @param {number} [tagIndex] - 태그 위치
 */

```
