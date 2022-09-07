/**
 * @author Sungjoong Kim <sjjoseph106@gmail.com>
 * @file 프리온보딩 프론트엔드 챌린지 2차
 * @license MIT
 */

/**
 * 필요한 데이터를 모두 모델링한다.
 * @typedef todoData
 * @type {Object}
 * @property {string} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} completed - 완료여부
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 태그들
 */

/** @type {Array<todoData>} */
const todoDataList = [];

/**
 * 할 일을 추가할 수 있다.
 * 내용 없이 추가할 수 없다.
 * @param {string} content - 내용
 * @param {string} category - 카테고리
 * @param {string[]} [tags] - 태그들
 */
const createTodo = (content, category, tags) => {
  if (!content || !category)
    return console.log("내용과 카테고리를 모두 입력해주세요.");
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
 * 모든 할 일을 조회할 수 있다.
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {string} [id] - 아이디
 * @returns {Array<todoData> | todoData} - 데이터
 */
const readTodo = (id) => {
  if (!id) return console.log(todoDataList);
  return todoDataList[id] === undefined
    ? console.log("아이디에 해당하는 할 일 데이터가 없습니다.")
    : console.log(todoDataList[id]);
};

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * @param {string} id - 아이디
 * @param {number} [tagIndex] - 태그 위치
 */
const updateTodo = (id, tagIndex) => {
  if (!id) return console.log("아이디를 입력해주세요.");
  if (tagIndex) return console.log("특정 태그를 수정합니다.");
  return console.log("할 일 데이터를 수정합니다.");
};

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 제거할 수 있다.
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {string} [id] - 아이디
 * @param {number} [tagIndex] - 태그 위치
 */
const deleteTodo = (id, tagIndex) => {
  if (!id && !tagIndex) todoDataList.splice(0);
  if (!id && tagIndex)
    return console.log("해당 태그를 삭제할 할 일의 아이디를 입력해주세요.");
  if (todoDataList[id] === undefined)
    return console.log("아이디에 해당하는 할 일 데이터가 없습니다.");
  const targetIndex = todoDataList.findIndex((todo) => todo.id === id);
  tagIndex
    ? todoDataList[targetIndex].tags.splice(tagIndex, 1)
    : todoDataList[targetIndex].tags.splice(0);
};
