/**
 * @author Sungjoong Kim <sjjoseph106@gmail.com>
 * @file 프리온보딩 프론트엔드 챌린지 2차
 * @license MIT
 */

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
const todoDataList = [];

/**
 * 할 일을 추가하는 함수입니다.
 * @param {string} content - 내용
 * @param {string} category - 카테고리
 * @param {string[]} [tags] - 태그들
 */
const createTodo = (content, category, tags) => {
  if (!content || !category) throw "내용과 카테고리를 모두 입력해주세요.";
  if (!tags) tags = [];
  todoDataList.push({
    id: `${Date.now()}`,
    content: content,
    completed: false,
    category: category,
    tags: tags,
  });
};

/**
 * 할 일을 조회하는 함수입니다.
 * @param {string} [id] - 아이디
 * @returns {Array<todoData> | todoData} - 데이터
 */
const readTodo = (id) => {
  if (!id) return todoDataList;
  if (todoDataList[id] === undefined)
    throw "아이디에 해당하는 할 일 데이터가 없습니다.";
  return todoDataList[id];
};

/**
 * 할 일을 수정하는 함수입니다.
 * @param {string} id - 아이디
 * @param {number} [tagIndex] - 태그 위치
 */
const updateTodo = (id, tagIndex) => {
  if (!id) throw "아이디를 입력해주세요.";
  // 할 일 데이터를 수정하는 코드
};

/**
 * 할 일을 삭제하는 함수입니다.
 * @param {string} [id] - 아이디
 * @param {number} [tagIndex] - 태그 위치
 */
const deleteTodo = (id, tagIndex) => {
  if (id) {
    if (todoDataList[id] === undefined)
      throw "아이디에 해당하는 할 일 데이터가 없습니다.";
    const targetIndex = todoDataList.findIndex((todo) => todo.id === id);
    tagIndex
      ? todoDataList[targetIndex].tags.splice(tagIndex, 1)
      : todoDataList[targetIndex].tags.splice(0);
  } else todoDataList.splice(0);
};
