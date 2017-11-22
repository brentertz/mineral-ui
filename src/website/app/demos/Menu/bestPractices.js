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
import React from 'react';
import { createStyledComponent, pxToEm } from '../../../../styles';
import { mineralTheme } from '../../../../themes';
import Menu, { MenuDivider, MenuGroup, MenuItem } from '../../../../Menu';

const DemoLayout = createStyledComponent('div', {
  '& > div': {
    backgroundColor: 'white',
    width: pxToEm(224)
  }
});

const backgroundColor = mineralTheme.color_gray_10;

export default {
  menu: [
    {
      type: 'do',
      backgroundColor,
      title: 'use the appropriate variant for your intent',
      description: `Match Mineral UI's [pre-defined variants](/color/#guidelines-variants) with semantic purpose.`,
      example: (
        <DemoLayout>
          <Menu>
            <MenuItem>Share</MenuItem>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Duplicate</MenuItem>
            <MenuItem variant="danger">Delete</MenuItem>
          </Menu>
        </DemoLayout>
      )
    },
    {
      type: 'do',
      backgroundColor,
      title: 'use clear labeling for option messaging',
      description: `[MenuItem](../menu-item) actions should be predictable for frictionless interaction.
  Labels should be structured: \`<verb> <noun>\`.`,
      example: (
        <DemoLayout>
          <Menu>
            <MenuItem secondaryText="Cmd + L">Select line</MenuItem>
            <MenuItem secondaryText="⌃ + ⇧ + W">Select word</MenuItem>
            <MenuItem secondaryText="Cmd + J">Join lines</MenuItem>
          </Menu>
        </DemoLayout>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      title: 'cause confusion with the wrong variant',
      description:
        'Using the wrong variant can cause confusion, or undue stress for users.',
      example: (
        <DemoLayout>
          <Menu>
            <MenuItem>Create new table</MenuItem>
            <MenuItem>Clone table</MenuItem>
            <MenuItem variant="success">Drop table</MenuItem>
          </Menu>
        </DemoLayout>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      title: 'use vague option labels',
      description:
        'Users should know exactly what will happen when they choose an option.',
      example: (
        <DemoLayout>
          <Menu>
            <MenuItem>Go</MenuItem>
            <MenuItem>Various config options</MenuItem>
            <MenuItem>Do it</MenuItem>
          </Menu>
        </DemoLayout>
      )
    }
  ],
  menuDivider: [
    {
      type: 'do',
      backgroundColor,
      title: 'divide menu options to establish hierarchy',
      description:
        'If a long list of menu options are all similar conceptually, create hierarchy by placing dividers.',
      example: (
        <DemoLayout>
          <Menu>
            <MenuItem>Adam</MenuItem>
            <MenuItem>Alex</MenuItem>
            <MenuDivider />
            <MenuItem>Betsy</MenuItem>
            <MenuItem>Brian</MenuItem>
            <MenuItem>Bryson</MenuItem>
            <MenuDivider />
            <MenuItem>Carly</MenuItem>
            <MenuItem>Charles</MenuItem>
          </Menu>
        </DemoLayout>
      )
    },
    {
      type: 'do',
      backgroundColor,
      title: 'separate meaningfully different options',
      description:
        'You can separate options that are related but should be set apart to increase usability.',
      example: (
        <DemoLayout>
          <Menu>
            <MenuItem>Create</MenuItem>
            <MenuItem>Read</MenuItem>
            <MenuItem>Update</MenuItem>
            <MenuDivider />
            <MenuItem variant="warning">Delete</MenuItem>
          </Menu>
        </DemoLayout>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      title: 'use dividers as a decorative element',
      description: `If there is no need to create further grouping, don't use MenuDividers for decoration.`,
      example: (
        <DemoLayout>
          <Menu>
            <MenuItem>Helium</MenuItem>
            <MenuDivider />
            <MenuItem>Neon</MenuItem>
            <MenuDivider />
            <MenuItem>Argon</MenuItem>
            <MenuDivider />
            <MenuItem>Krypton</MenuItem>
            <MenuDivider />
            <MenuItem>Xenon</MenuItem>
            <MenuDivider />
            <MenuItem>Radon</MenuItem>
            <MenuDivider />
            <MenuItem>Oganesson</MenuItem>
          </Menu>
        </DemoLayout>
      )
    }
  ],
  menuGroup: [
    {
      type: 'do',
      backgroundColor,
      title:
        'create groups if there are more than one set of actions in a Menu',
      description: `Users will be able to quickly scan their available options if there aren't too many actions at the same level of hierarchy.`,
      example: (
        <DemoLayout>
          <Menu>
            <MenuGroup>
              <MenuItem>Undo</MenuItem>
              <MenuItem>Redo</MenuItem>
            </MenuGroup>
            <MenuGroup>
              <MenuItem>Cut</MenuItem>
              <MenuItem>Copy</MenuItem>
              <MenuItem>Paste</MenuItem>
            </MenuGroup>
          </Menu>
        </DemoLayout>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      title: 'repeat the obvious in the group title',
      description: `If there are only a couple of groups with a handful of elements, trust that the user will figure out the grouping from context.`,
      example: (
        <DemoLayout>
          <Menu>
            <MenuGroup title="History Navigation">
              <MenuItem>Undo</MenuItem>
              <MenuItem>Redo</MenuItem>
            </MenuGroup>
            <MenuGroup title="Text Actions">
              <MenuItem>Cut</MenuItem>
              <MenuItem>Copy</MenuItem>
              <MenuItem>Paste</MenuItem>
            </MenuGroup>
          </Menu>
        </DemoLayout>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      title: 'put too many items into a group',
      description: `If there are too many options in a group, it will be overwhelming to users and your feature will get buried.`,
      example: (
        <DemoLayout>
          <Menu>
            <MenuGroup>
              <MenuItem>Decrease font size</MenuItem>
              <MenuItem>Increase font size</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItem>Toggle command palette</MenuItem>
              <MenuItem>Toggle console</MenuItem>
              <MenuItem>Toggle context view</MenuItem>
              <MenuItem>Toggle debugger</MenuItem>
              <MenuItem>Toggle diagnostics</MenuItem>
              <MenuItem>Toggle distraction free mode</MenuItem>
              <MenuItem>Toggle file tree</MenuItem>
              <MenuItem>Toggle git tab</MenuItem>
              <MenuItem>Toggle GitHub tab</MenuItem>
              <MenuItem>Toggle health</MenuItem>
              <MenuItem>Toggle outline view</MenuItem>
              <MenuItem>Toggle quick open</MenuItem>
              <MenuItem>Toggle React inspector</MenuItem>
              <MenuItem>Toggle soft wrap</MenuItem>
              <MenuItem>Toggle task runner</MenuItem>
              <MenuItem>Toggle test runner</MenuItem>
            </MenuGroup>
          </Menu>
        </DemoLayout>
      )
    }
  ],
  menuItem: [
    {
      type: 'do',
      backgroundColor,
      title: 'use the right intent',
      description:
        'Give your users hints about what the potential outcome of an action will be.',
      example: (
        <DemoLayout>
          <Menu>
            <MenuItem>Start instance</MenuItem>
            <MenuItem>Generate snapshot</MenuItem>
            <MenuItem variant="warning">Reboot instance</MenuItem>
            <MenuItem variant="danger">Terminate instance</MenuItem>
          </Menu>
        </DemoLayout>
      )
    },
    {
      type: 'do',
      backgroundColor,
      title: 'use secondary text to give hints to the user',
      description:
        'Use the `secondaryText` attribute to give hints about extra functionality or provide status context.',
      example: (
        <DemoLayout>
          <Menu>
            <MenuItem secondaryText="Cmd + X">Cut</MenuItem>
            <MenuItem secondaryText="Cmd + C">Copy</MenuItem>
            <MenuItem secondaryText="Cmd + V">Paste</MenuItem>
          </Menu>
        </DemoLayout>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      title: 'use non-actions as placeholders for options',
      description:
        'All MenuItems in a Menu should be actionable. If an option only exists to provide information, it probably belongs somewhere else.',
      example: (
        <DemoLayout>
          <Menu>
            <MenuItem variant="success">Daily revenue - $6543</MenuItem>
            <MenuItem>Initiate full refund</MenuItem>
            <MenuItem>Initiate partial refund</MenuItem>
            <MenuItem>Email customer</MenuItem>
          </Menu>
        </DemoLayout>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      title: 'use disabled MenuItems as section titles',
      description:
        'Use the `title` attribute to show meta information for a group, or place this information elsewhere in the interface.',
      example: (
        <DemoLayout>
          <Menu>
            <MenuItem disabled>Instance Id: 12345</MenuItem>
            <MenuDivider />
            <MenuItem>Start instance</MenuItem>
            <MenuItem>Generate snapshot</MenuItem>
            <MenuItem variant="warning">Reboot instance</MenuItem>
            <MenuItem variant="danger">Terminate instance</MenuItem>
          </Menu>
        </DemoLayout>
      )
    }
  ]
};
