const menu = `
    <div class="profile-menu">
        <a href="${profileURL}">My profile</a>
        <a href="${logoutURL}" class="warn">Logout</a>
    </div>
`;

tippy('.navbar .cp-avatar', {
    content: menu,
    placement: "bottom-end",
    arrow: false,
    theme: 'light',
    trigger: 'click',
    interactive: true,
    allowHTML: true,
  });