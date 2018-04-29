# Workshop Schedule


# Day 1

## Morning Session, Part 1
**Time**: 9:30AM - 10:45AM

**Duration**: 1 hour, 15 minutes

###### Schedule

* **Introduction, Setup** (_9:30AM - 9:45AM_)
 * Introduce ourselves, give an overview of what we'll be teaching.
 * Let students ask any questions they may have.
 * Depending on how many people are in attendance, maybe have each student introduce themselves
 * Make sure everybody is all setup
* **Introduction to Component Patterns** (_9:45AM - 10:00AM_)
  * Define the topic "component patterns"
  * Explain why component patterns are important, what they allow/prevent
  * Ask if anyone can provide an example of a component pattern
* **Render Prop Lecture** (_10:00AM - 10:10AM_)
  * Describe the render prop pattern
  * Go over benefits/drawbacks
  * Give examples
  * Explain using a `render` prop versus using a "function as a child"
* **Render Props Exercises** (_10:10AM - 10:45AM_)
  * Multiple exercises using render props

## Break
**Time**: 10:45AM - 11:00AM

**Duration**: 15 minutes

We don't have to do 💩 here!

## Morning Session, Part 2
**Time**: 11:00AM - 12:00PM

**Duration**: 1 hour

###### Schedule

* **Compound Components Lecture** (_11:00AM - 11:10AM_)
  * Describe "compound" components
  * Component components are components that share some "implicit" state
  * Go over how they can be used to provide a set of related components that work together, with constraints
  * Component components let you share _implicit_ state
  * Implicit is state that doesn't have to be explicitly shared between components, which you'd normally do through props
  * Props are the API for explicit state
  * __Maybe have a section on implicit vs explicit state?__
* **Compound Components Exercises** (_11:10AM - 11:30AM_)
  * How to communicate implicit state
  * Talk about the OG approach of using `React.cloneElement`
    * Discuss pitfalls of `React.cloneElement`
    * Show how it breaks with deeply nested compound components
    * Generally a pattern you be aware of, but avoid if possible
  * Discuss using Context to make compound components more flexible
    * _Might have to do context lesson first?_
  * Maybe use the [Header/Section][1] example as a starting point
  * Restricting access to component components
    * Defining them as `static` properties on the parent component
    * Using a render prop to provide these components
  * Write some exercises for compound components
* **Controlled Components Lecture** (_11:30AM - 11:40AM_)
  * Describe controlled components
  * Explain how the "controlled" vs "uncontrolled" pattern can be generalized for more than just inputs
  * Go over benefits
  * Give examples
* **Controlled Components Exercises** (_11:40AM - 12:00PM_)
  * Exercises, implement controlled components


## Lunch
**Time**: 12:00PM - 1:00PM

**Duration**: 1 hour

We don't have to do 💩 here!

## Afternoon Session, Part 1
**Time**: 1:00PM - 2:45PM

**Duration**: 1 hour, 45 minutes

* **Higher Order Components Lecture** (_1:00PM - 1:10PM_)
  * Go over what they are, give examples, et
  * Setting the right `displayName`
  * Handling namespace collisions
  * Forwarding refs with `React.forwardRef`
* **Higher Order Components Exercises** (_1:10PM - 1:30:PM_)
  * Exercises
* **Portals** (_1:30PM - 2:45PM_)
  * <p style="color: red">Defer to Emma</p>


## Break
**Time**: 2:45PM - 3:00PM

**Duration**: 15 minutes

We don't have to do 💩 here!

## Afternoon Session, Part 2
**Time**: 3:00PM - 5:30PM

**Duration**: 2 hour, 30 minutes

* **What's New in 16.3** (_3:00PM - 5:30PM_)
  * <p style="color: red">Defer to Ken here</p>


# Day 2

## Morning Session, Part 1
**Time**: 9:30AM - 10:45AM

**Duration**: 1 hour, 15 minutes

###### Schedule

* **Warm up, Q/A** (_9:30AM - 9:35AM_)
 * Allow a few minutes to let anyone ask any questions they may have about yesterday's sessions
* **Forms** (_9:35 - 10:45_)
  * <p style="color: red">Defer to Emma here</p>

## Break
**Time**: 10:45AM - 11:00AM

**Duration**: 15 minutes

We don't have to do 💩 here!

## Morning Session, Part 2
**Time**: 11:00AM - 12:00PM

**Duration**: 1 hour

###### Schedule

* **Universal Components** (_11:00AM - 12:00PM_)
 * <p style="color: red">Defer to Ken here</p>

## Lunch
**Time**: 12:00PM - 1:00PM

**Duration**: 1 hour

We don't have to do 💩 here!

## Afternoon Session, Part 1
**Time**: 1:00PM - 2:45PM

**Duration**: 1 hour, 45 minutes

* **Safe Async Introduction** (_1:00PM - 1:15PM_)
 * Describe what "async" means for React
 * Give a high-level overview of async reconciliation (maybe show Andrew's visualizations)
 * Describe Pitfalls of current synchronous patterns
 * Explain how we can make our applications async-safe
* **Async Demo** (_1:15PM - 1:20PM_)
  * Show off a demo of how async works, maybe a fork of Dan's
* **Async Safe Patterns Lecture** (_1:20PM - 1:30PM_)
  * Go over the patterns [here](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)
* **`StrictMode` Lecture** (_1:30 - 1:35PM_)
  * Explain `StrictMode`
  * Explain what it does
  * Maybe have a small exercise of adding `StrictMode` to the app we'll be using for the async exercises
* **Fetching External Data Lecture** (_1:35PM - 1:40PM_)
  * Describe how to fetch external data in an async-safe way
* **Fetching External Data Exercises** (_1:40PM - 2:00PM_)
* **Subscriptions Lecture** (_2:00PM - 2:10PM_)
  * Talk about how subscriptions are unsafe
  * Introduce `create-subscription`
* **Subscriptions Exercise** (_2:10PM - 2:20PM_)
  * Have students refactor an async-unsafe subscription to use `create-subscription`
* **Reading from the DOM Lecture** (_2:20PM - 2:30PM_)
  * Discuss use cases
  * `getSnapshotBeforeUpdate` and `componentDidUpdate`
* **Reading from the DOM Exercise** (_2:30PM - 2:45PM_)
  * Refactor to use `getSnapshotBeforeUpdate`

## Break
**Time**: 2:45PM - 3:00PM

**Duration**: 15 minutes

We don't have to do 💩 here!

## Afternoon Session, Part 2
**Time**: 3:00PM - 5:30PM

**Duration**: 2 hour, 30 minutes

* **Error Boundaries Lecture** (_3:00PM - 3:10PM_)
  * Describe them, benefits, etc.
  * How and when to use them
  * What errors they catch and miss
* **Error Boundaries Exercise** (_3:10PM - 3:30PM_)
  * Make sure there's some functionality in the app we're using for exercises that throws
  * Add an Error Boundary to the app we've been using and show students how to trigger the issue and that the app un-mounts
  * Add Error Boundary and show error state
  * Improve Error Boundary by isolating it to one section (e.g., if the sidebar component is crashing, don't take out the main content)
* **Testing and Performance** (_3:30PM - 5:30PM_)
  * <p style="color: red">Collaborate with Emma and Ken here</p>


# Unscheduled Sessions

These are some sessions that may be valuable, but that don't fit in with our current schedule.

* **Managing and Deriving State** (_N/A_)
  * What to put in state, what to derive?
  * Avoid using state as a proxy for data that can be derived from props
    * If your state is just some pure derivation of props that is _always_ synced with new props, it's not really state
  * State should be _local_ and mostly independent from props.
  * The appropriate use cases for `getDerivedStateFromProps`
  * Using memoized functions (`memoize-one` library is a good one)
  * Explain how you can use memoized component methods to derive state in `render` without having to worry about using another lifecycle
  * Using `setState` callbacks to run code after state has been updated
    * A good pattern if you need to notify some parent of local state changes (input element notifies parent in an `AutoComplete` component)
  * Using updater functions in `setState`
    * Being able to return `null` to signify that no state update is needed

* **Render-less Components** (_N/A_)
  * Components that don't actually render anything to the DOM
  * A good example of how React can let you implement a declarative API for imperative functionality
  * For example, we could make a `Speak` component using a render-less component and the `SpeechSynthesis` API
  * A "Container" component can be thought of as a render-less component, since it doesn't actually render anything new itself.
  * You can also define components that render absolutely nothing. They may have _side effects_
  * `react-helmet` is a good example (re-implementing could be an exercise)

* **Streaming Server Rendering** (_N/A_)
  * Show off `renderToNodeStream`
  * Basic SSR patterns
  * Send down initial data and hydrate state

* **Optimizing Renders** (_N/A_)
  * Show off virtualization techniques
    * Have users implement virtualized list as exercise?
  * `PureComponent` and `shouldComponentUpdate`
  * When to optimize (read: not too early)
  * The benefits of immutable data

[1]: https://medium.com/@Heydon/managing-heading-levels-in-design-systems-18be9a746fa3
