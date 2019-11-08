## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What problem does the context API help solve?

It solves the problem such as prop drilling by making data shared more efficiently.

- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do?

Actions is like a direction on what to change or update data.

The purpose of the reducers is to make a new state so it will not mutate the original state 

Store contains the app's state and reducers.

 Why is the store known as a 'single source of truth' in a redux application?

It means that the store is the only place that has data that can be changed.

- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and Component state is local. Application state would be used so that other components can have access and Component state would be used just for that component and other component do not need access to that state.

- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that allows asynchronous operations inside Action Creators to happen. For example, it allows to show a message while loading a data from an API.

- [ ] What is your favorite state management system you've learned and this sprint? Please explain why!

So far, I do not have a favorite one since I still have yet to master redux system. If I become more familiar with all the systems then I think I will be able to decide.

