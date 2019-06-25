# Fwitter Working with State Exercise

Welcome to Fwitter, a twitter application from Flatiron Coaches who don't use Twitter much! In this application, you can view tweets from four Twitter users. It's also got a dark mode theme toggle because dark mode is all the rage these days.

Your deliverables: 

## 1. Toggle dark mode in the Header component

Our `<Header>` component has a dark mode theme feature that can be enabled by clicking on the toggle. Get that working!

## 2. Toggle dark mode throughout the application

It's nice having a theme applied to the nav bar, but what if we want that theme to apply to our whole application? The CSS for this app is already set up. All we need to do to apply a dark mode theme to all of our components is to give our topmost div (in the `<App>` component) a className of "dark-mode":

```jsx
<div id="wrapper" className="dark-mode">
  ...
</div>
```

HINT: You may need to change where state is being set to get this feature to work.

## 3. Click 'View Tweets' on the user card to view the user's tweets

We're currently only able to see the tweets for one user! Our data is being loaded in `<TweetsContainer>` in the format below. Find a way to change which user's tweets are being displayed.

```js
// Sample user data
[
  {
    id: 1,
    handle: "@coffee_dad",
    description: "just a dad who loves his coffee",
    photo: "https://pbs.twimg.com/profile_images/378800000823347939/036f78135425d19367fcbb76ef58e86d_bigger.jpeg",
    tweets: [
      {
        created_at: "Wed Jun 12 13:49:10 +0000 2019",
        favorite_count: 5782,
        id: 1138805443562803200,
        text: "coffee"
      },
      // more tweet objects
    ]
  },
  // more user objects
]
```

## 4. BONUS: Click the Like button to increase likes on a tweet
