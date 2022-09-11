const todoDataList = [];
const createTodo = (content, category, tags) => {
    if (!content || !category)
        throw "내용과 카테고리를 모두 입력해주세요.";
    if (!tags)
        tags = [];
    todoDataList.push({
        id: `${Date.now()}`,
        content: content,
        completed: false,
        category: category,
        tags: tags,
    });
};
const readTodo = (id) => {
    if (!id)
        return todoDataList;
    if (todoDataList[id] === undefined)
        throw "아이디에 해당하는 할 일 데이터가 없습니다.";
    return todoDataList[id];
};
const updateTodo = (id, tagIndex) => {
    if (!id)
        throw "아이디를 입력해주세요.";
    // 할 일 데이터를 수정하는 코드
};
const deleteTodo = (id, tagIndex) => {
    if (id) {
        if (todoDataList[id] === undefined)
            throw "아이디에 해당하는 할 일 데이터가 없습니다.";
        const targetIndex = todoDataList.findIndex((todo) => todo.id === id);
        tagIndex
            ? todoDataList[targetIndex].tags.splice(tagIndex, 1)
            : todoDataList[targetIndex].tags.splice(0);
    }
    else
        todoDataList.splice(0);
};
export {};
