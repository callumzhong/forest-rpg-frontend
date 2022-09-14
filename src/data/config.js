import CHALET_WALLS from 'data/chaletWalls.json';
import HOME_WALLS from 'data/homeWalls.json';
import asGridCoord from 'utils/asGridCoord';
import withGrid from 'utils/withGrid';

const layers = {
  home: {
    map: 'home',
    row: 30,
    column: 40,
    lowerSrc:
      'https://res.cloudinary.com/callumzhong/image/upload/v1661574655/lower_lmaezy.png',
    walls: {
      ...HOME_WALLS,
    },
    cutsceneSpaces: {
      [asGridCoord(15, 6)]: [
        {
          events: [{ type: 'changeMap', map: 'chalet' }],
        },
      ],
    },
    actionSpaces: {
      [asGridCoord(23, 8)]: 'fish',
      [asGridCoord(23, 9)]: 'fish',
      [asGridCoord(23, 10)]: 'fish',
      [asGridCoord(21, 11)]: 'fish',
      [asGridCoord(21, 12)]: 'fish',
      [asGridCoord(21, 13)]: 'fish',
      [asGridCoord(21, 14)]: 'fish',
      [asGridCoord(28, 15)]: 'fish',
      [asGridCoord(28, 16)]: 'fish',
      [asGridCoord(28, 17)]: 'fish',
      [asGridCoord(28, 18)]: 'fish',
      [asGridCoord(34, 18)]: 'fish',
      [asGridCoord(34, 8)]: 'fish',
      [asGridCoord(34, 9)]: 'fish',
      [asGridCoord(34, 10)]: 'fish',
      [asGridCoord(34, 11)]: 'fish',
      [asGridCoord(34, 12)]: 'fish',
      [asGridCoord(34, 13)]: 'fish',
      [asGridCoord(34, 14)]: 'fish',
      [asGridCoord(34, 15)]: 'fish',
      [asGridCoord(34, 16)]: 'fish',
      [asGridCoord(34, 17)]: 'fish',
      [asGridCoord(34, 18)]: 'fish',
      [asGridCoord(5, 9)]: 'chop',
      [asGridCoord(6, 9)]: 'chop',
      [asGridCoord(9, 12)]: 'chop',
      [asGridCoord(10, 12)]: 'chop',
      [asGridCoord(7, 16)]: 'chop',
      [asGridCoord(8, 16)]: 'chop',
      [asGridCoord(12, 16)]: 'chop',
      [asGridCoord(13, 16)]: 'chop',
      [asGridCoord(5, 22)]: 'chop',
      [asGridCoord(6, 22)]: 'chop',
      [asGridCoord(8, 24)]: 'chop',
      [asGridCoord(9, 24)]: 'chop',
      [asGridCoord(20, 5)]: 'chop',
      [asGridCoord(21, 5)]: 'chop',
      [asGridCoord(26, 5)]: 'chop',
      [asGridCoord(27, 5)]: 'chop',
      [asGridCoord(31, 5)]: 'chop',
      [asGridCoord(32, 5)]: 'chop',
      [asGridCoord(19, 18)]: 'chop',
      [asGridCoord(20, 18)]: 'chop',
      [asGridCoord(17, 24)]: 'chop',
      [asGridCoord(18, 24)]: 'chop',
      [asGridCoord(25, 24)]: 'chop',
      [asGridCoord(26, 24)]: 'chop',
      [asGridCoord(30, 20)]: 'chop',
      [asGridCoord(31, 20)]: 'chop',
      [asGridCoord(33, 24)]: 'chop',
      [asGridCoord(34, 24)]: 'chop',
      [asGridCoord(9, 6)]: 'mining',
      [asGridCoord(5, 12)]: 'mining',
      [asGridCoord(10, 19)]: 'mining',
      [asGridCoord(13, 23)]: 'mining',
      [asGridCoord(19, 9)]: 'mining',
      [asGridCoord(17, 16)]: 'mining',
      [asGridCoord(35, 4)]: 'mining',
      [asGridCoord(26, 19)]: 'mining',
      [asGridCoord(30, 23)]: 'mining',
    },
  },
  chalet: {
    map: 'chalet',
    row: 13,
    column: 17,
    lowerSrc:
      'https://res.cloudinary.com/callumzhong/image/upload/v1663104011/chalet_lower_i3qd0f.png',
    walls: { ...CHALET_WALLS },
    cutsceneSpaces: {
      [asGridCoord(8, 12)]: [
        {
          events: [{ type: 'changeMap', map: 'home' }],
        },
      ],
    },
  },
};

const gameObjects = {
  home: {
    hero: {
      isPlayerControlled: true,
      x: withGrid(15),
      y: withGrid(8),
      src: 'https://res.cloudinary.com/callumzhong/image/upload/v1660942761/character_rojwo3.png',
      zoom: 2,
      transformY: -24,
      transformX: 6,
      bait: {
        x: withGrid(9999),
        y: withGrid(9999),
        height: 16,
        width: 16,
        src: 'https://res.cloudinary.com/callumzhong/image/upload/v1661368307/bait_lximgo.png',
        zoom: 2,
        animations: {
          'idle-down': [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
          ],
        },
      },
    },
    npc1: {
      x: withGrid(13),
      y: withGrid(11),
      src: 'https://res.cloudinary.com/callumzhong/image/upload/v1663101763/npc_1_zz1qil.png',
      zoom: 2,
      width: 16,
      height: 20,
      transformY: -6,
      transformX: 6,
      direction: 'right',
      animations: {
        'idle-left': [[1, 1]],
        'idle-down': [[1, 0]],
        'idle-right': [[1, 2]],
        'idle-up': [[1, 3]],
      },
      talking: [
        {
          events: [
            {
              type: 'textMessage',
              mode: 'message',
              title:
                '歡迎來到 FOREST 世界，以下向你說明操作：',
              content: `使用 [ WSAD or 方向鍵 ]
              移動到湖邊、樹、石頭，當右下角動作鍵亮起，點擊或使用
              [ Space ]
              進行採集，則採集所獲得的物品可以進入木屋內找尋 NPC
              進行抽獎。`,
              faceHero: 'npc1',
            },
          ],
        },
      ],
    },
    npc2: {
      x: withGrid(35),
      y: withGrid(11),
      src: 'https://res.cloudinary.com/callumzhong/image/upload/v1660942761/character_rojwo3.png',
      zoom: 2,
      width: 32,
      transformY: -24,
      transformX: -24,
      animations: {
        'idle-down': [
          [12, 7],
          [11, 7],
          [10, 7],
          [9, 7],
          [8, 7],
          [7, 7],
          [6, 7],
          [5, 7],
        ],
      },
      bait: {
        x: withGrid(31),
        y: withGrid(12),
        height: 16,
        width: 16,
        src: 'https://res.cloudinary.com/callumzhong/image/upload/v1661368307/bait_lximgo.png',
        zoom: 2,
        animations: {
          'idle-down': [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
          ],
        },
      },
    },
    npc3: {
      x: withGrid(27),
      y: withGrid(16),
      src: 'https://res.cloudinary.com/callumzhong/image/upload/v1660942761/character_rojwo3.png',
      zoom: 2,
      width: 32,
      transformY: -24,
      transformX: 6,
      animations: {
        'idle-down': [
          [0, 4],
          [1, 4],
          [2, 4],
          [3, 4],
          [4, 4],
          [4, 4],
          [6, 4],
          [7, 4],
        ],
      },
      bait: {
        x: withGrid(30),
        y: withGrid(16),
        height: 16,
        width: 16,
        src: 'https://res.cloudinary.com/callumzhong/image/upload/v1661368307/bait_lximgo.png',
        zoom: 2,
        animations: {
          'idle-down': [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
          ],
        },
      },
    },
    npc4: {
      x: withGrid(22),
      y: withGrid(8),
      src: 'https://res.cloudinary.com/callumzhong/image/upload/v1660942761/character_rojwo3.png',
      zoom: 2,
      width: 32,
      transformY: -24,
      transformX: 6,
      animations: {
        'idle-down': [
          [0, 4],
          [1, 4],
          [2, 4],
          [3, 4],
          [4, 4],
          [4, 4],
          [6, 4],
          [7, 4],
        ],
      },
      bait: {
        x: withGrid(27),
        y: withGrid(9),
        height: 16,
        width: 16,
        src: 'https://res.cloudinary.com/callumzhong/image/upload/v1661368307/bait_lximgo.png',
        zoom: 2,
        animations: {
          'idle-down': [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
          ],
        },
      },
    },
    npc5: {
      x: withGrid(9),
      y: withGrid(16),
      src: 'https://res.cloudinary.com/callumzhong/image/upload/v1660942761/character_rojwo3.png',
      zoom: 2,
      width: 32,
      transformY: -24,
      transformX: -48,
      animations: {
        'idle-down': [
          [12, 5],
          [11, 5],
          [10, 5],
          [9, 5],
          [8, 5],
          [7, 5],
          [6, 5],
          [5, 5],
          [4, 5],
          [3, 5],
          [2, 5],
          [1, 5],
          [0, 5],
        ],
      },
    },
    npc6: {
      x: withGrid(8),
      y: withGrid(12),
      src: 'https://res.cloudinary.com/callumzhong/image/upload/v1660942761/character_rojwo3.png',
      zoom: 2,
      width: 32,
      transformY: -24,
      transformX: 32,
      animations: {
        'idle-down': [
          [0, 2],
          [1, 2],
          [2, 2],
          [3, 2],
          [4, 2],
          [5, 2],
          [6, 2],
          [7, 2],
          [8, 2],
          [9, 2],
          [10, 2],
          [11, 2],
          [12, 2],
        ],
      },
    },
    npc7: {
      x: withGrid(8),
      y: withGrid(6),
      src: 'https://res.cloudinary.com/callumzhong/image/upload/v1660942761/character_rojwo3.png',
      zoom: 2,
      width: 32,
      transformY: -24,
      transformX: 6,
      animations: {
        'idle-down': [
          [0, 3],
          [1, 3],
          [2, 3],
          [3, 3],
          [4, 3],
          [5, 3],
          [6, 3],
          [7, 3],
          [8, 3],
        ],
      },
    },
    npc8: {
      x: withGrid(18),
      y: withGrid(16),
      src: 'https://res.cloudinary.com/callumzhong/image/upload/v1660942761/character_rojwo3.png',
      zoom: 2,
      width: 32,
      transformY: -24,
      transformX: -24,
      animations: {
        'idle-down': [
          [12, 6],
          [11, 6],
          [10, 6],
          [9, 6],
          [8, 6],
          [7, 6],
          [6, 6],
          [5, 6],
          [4, 6],
        ],
      },
    },
  },
  chalet: {
    hero: {
      isPlayerControlled: true,
      x: withGrid(8),
      y: withGrid(12),
      src: 'https://res.cloudinary.com/callumzhong/image/upload/v1660942761/character_rojwo3.png',
      zoom: 2,
      transformY: -24,
      transformX: 6,
    },
    npc1: {
      x: withGrid(15),
      y: withGrid(10),
      src: 'https://res.cloudinary.com/callumzhong/image/upload/v1663101763/npc_1_zz1qil.png',
      zoom: 2.2,
      width: 16,
      height: 20,
      transformY: -6,
      transformX: 6,
      animations: {
        'idle-left': [[1, 1]],
        'idle-down': [[1, 0]],
        'idle-right': [[1, 2]],
        'idle-up': [[1, 3]],
      },
      direction: 'left',
      talking: [
        {
          events: [
            {
              type: 'textMessage',
              mode: 'store',
              faceHero: 'npc1',
            },
          ],
        },
      ],
    },
  },
};

export { layers, gameObjects };
