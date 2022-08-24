/**
 * @author Sungjoong Kim <sjjoseph106@gmail.com>
 * @file 프리온보딩 프론트엔드 챌린지 2차
 * @license MIT
 */

/** Todo 앱을 JSDoc으로 문서화한다. */
const TodoList = () => {
  /**
   * 필요한 데이터를 모두 모델링한다.
   * @type {{id: string, content: string, completed: boolean, category: string, tags?: string[]}[]}
   */
  const todoListData = [];

  /**
   * 할 일을 추가할 수 있다.
   * 내용 없이 추가할 수 없다.
   * @param {string} content
   * @param {string} category
   * @param {string[]} [tags]
   */
  const createTodo = (content, category, tags) => {};

  /**
   * 모든 할 일을 조회할 수 있다.
   * ID를 기반으로 특정 할 일을 조회할 수 있다.
   * @param {string} [id]
   * @returns {{id: string, content: string, completed: boolean, category: string, tags?: string[]}[] | {id: string, content: string, completed: boolean, category: string, tags?: string[]}}
   */
  const readTodo = (id) => {};

  /**
   * ID를 제외한 모든 속성을 수정할 수 있다.
   * 특정 할 일의 특정 태그를 수정할 수 있다.
   * @param {string} id
   * @param {number} [tagIndex]
   */
  const updateTodo = (id, tagIndex) => {};

  /**
   * ID를 기반으로 특정 할 일을 삭제할 수 있다.
   * 모든 할 일을 제거할 수 있다.
   * 특정 할 일의 특정 태그를 삭제할 수 있다.
   * 특정 할 일의 모든 태그를 제거할 수 있다.
   * @param {string} [id]
   * @param {number} [tagIndex]
   */
  const deleteTodo = (id, tagIndex) => {};
};

document.addEventListener("DOMContentLoaded", () => {
  TodoList();
});
