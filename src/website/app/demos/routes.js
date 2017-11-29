/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
export default {
  button: {
    description:
      'A Button should be used whenever you need to trigger an action in your app. The color of the button should be chosen according to the intent of the action.',
    slug: 'button',
    title: 'Button'
  },
  card: {
    description:
      'Cards are used to group different kinds of elements with actions attached. Use a Card to contain content that might not fit neatly into a table row or grid cell.',
    slug: 'card',
    title: 'Card'
  },
  'card-block': {
    description:
      'CardBlock is used to help lay out content that’s not a title or an image in the body of the Card.',
    slug: 'card-block',
    title: 'CardBlock'
  },
  'card-image': {
    description:
      'Use a CardImage to reinforce the intent of the Card. Images shouldn’t be used alone in a Card, but should be paired with a call to action and/or a CardTitle.',
    slug: 'card-image',
    title: 'CardImage'
  },
  'card-title': {
    description:
      'Use a CardTitle when you need a consistently styled heading for your Card. Use a subtitle to provide supporting information for the data displayed in the Card.',
    slug: 'card-title',
    title: 'CardTitle'
  },
  dropdown: {
    description:
      'Use Dropdown for extra functionality, not for primary actions, since the options are hidden from the user until interaction.',
    slug: 'dropdown',
    title: 'Dropdown'
  },
  icon: {
    description:
      'Icons can symbolize actions and objects in your interface. Use icons in combination with labels to help users more quickly process your UI.',
    slug: 'icon',
    title: 'Icon'
  },
  link: {
    description:
      'Links should be used when the browser location will change, and should be clear about where the user will navigate.',
    slug: 'link',
    title: 'Link'
  },
  menu: {
    description:
      'A Menu should be used whenever you need to display a concise list of options to your user.',
    slug: 'menu',
    title: 'Menu'
  },
  'menu-divider': {
    description:
      'MenuDividers are used to visually separate MenuGroups or individual MenuItems to establish hierarchy in your Menu.',
    slug: 'menu-divider',
    title: 'MenuDivider'
  },
  'menu-group': {
    description:
      'MenuGroups are used to group conceptually related elements, and to hint at other available, related options.',
    slug: 'menu-group',
    title: 'MenuGroup'
  },
  'menu-item': {
    description:
      'A MenuItem represents an option in a Menu. They can be used to trigger actions or navigate to a new location.',
    slug: 'menu-item',
    title: 'MenuItem'
  },
  popover: {
    description:
      'Use Popovers to contain content providing clarification for other interface elements. Popovers can be used to implement other custom behaviors or widgets.',
    slug: 'popover',
    title: 'Popover'
  },
  'theme-provider': {
    description:
      'Wrap your app in a ThemeProvider in order for styles to be properly applied. Additionally, it can be nested deeper in your component hierarchy to theme portions of your app.',
    slug: 'theme-provider',
    title: 'ThemeProvider'
  }
};
