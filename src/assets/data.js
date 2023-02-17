import friendImg from './img/friend.png'
import msgImg from './img/msg.png'
import eventImg from './img/event.png'
import fundImg from './img/fund.png'
import gallImg from './img/gall.png'
import gameImg from './img/game.png'
import groupImg from './img/group.png'
import memtImg from './img/mem.png'
import tutImg from './img/tut.png'
import vidImg from './img/vid.png'
import watchImg from './img/watch.png'
import marketImg from './img/market.png'
import courImg from './img/cour.png'
import userImg from './img/user.jpg'
import userImg2 from './img/men.jpg'


export const user = 
    {
        id: 1,
        name: "John Doe",
        profilePic: {userImg2}
      }



export const menuItems = [
    {
        id:1,
        title: '',
        items: [
            {
                itemImg: userImg,
                itemName: 'John Doe'
            },
            {
                itemImg: friendImg,
                itemName: 'Friends'
            },
            {
                itemImg: groupImg,
                itemName: 'Groups'
            },
            {
                itemImg: marketImg,
                itemName: 'Marketplace'
            },
            {
                itemImg: watchImg,
                itemName: 'Watch'
            },
            {
                itemImg: memtImg,
                itemName: 'Memories'
            }
           
        ]
    },
    {
        id: 2,
        title: 'Your Shortcuts',
        items: [
            {
                itemImg: eventImg,
                itemName: 'Events'
            },
            {
                itemImg: gameImg,
                itemName: 'Gaming'
            },
            {
                itemImg: gallImg,
                itemName: 'Gallery'
            },
            {
                itemImg: vidImg,
                itemName: 'Videos'
            },
            {
                itemImg: msgImg,
                itemName: 'Messege'
            }
           
        ]

    },
    {
        id: 3,
        title: 'Others',
        items: [
            {
                itemImg: fundImg,
                itemName: 'Fundraiser'
            },
            {
                itemImg: tutImg,
                itemName: 'Tutorials'
            },
            {
                itemImg: courImg,
                itemName: 'courses'
            }
          
        ]

    }
]


export const rightItems = [
    {
        id:1,
        title: 'Suggestions For You',
        items: [
            {
                itemImg: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
                itemName: 'John Doe',
                follow: true,
                dismiss: false
            },
            {
                itemImg: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
                itemName: 'John Doe',
                follow: true,
                dismiss: false
            }
           
           
        ]
    },
    {
        id: 2,
        title: 'Latest Activities',
        items: [
            {
                itemImg: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
                itemName: 'John Doe',
                activity: 'Changed their cover picture',
                time: '1 m ago',
                
            },
            {
                itemImg: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
                itemName: 'John Doe',
                activity: 'Liked post',
                time: '20 m ago',
                
            },
            {
                itemImg: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
                itemName: 'John Doe',
                activity: 'Liked a comments',
                time: '4h ago',
                
            },
            {
                itemImg: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
                itemName: 'John Doe',
                activity: 'Posted',
                time: '1 m ago',
                
            },
           
           
        ]
    },
    {
        id: 3,
        title: 'Online Friends',
        items: [
            {
                itemImg: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
                itemName: 'John Doe',
                online: true,
                
            },
            {
                itemImg: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
                itemName: 'John Doe',
                online: true,
                
            },
            {
                itemImg: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
                itemName: 'John Doe',
                online: false,
                
            },
            {
                itemImg: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
                itemName: 'John Doe',
                Activity: true,
                
            },
            {
                itemImg: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
                itemName: 'John Doe',
                Activity: false,
                
            },
            {
                itemImg: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
                itemName: 'John Doe',
                Activity: true,
                
            },
           
           
        ]
    },
]



export const stories = [ 
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/745045/pexels-photo-745045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];


  export const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];


  export const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];