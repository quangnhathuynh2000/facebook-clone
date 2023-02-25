import React from 'react'
import Story from './Story'
import './StoryFeed.css'
function StoryFeed() {
    return (
        <div className='storyFeed'>
            <Story
                images='https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg'
                profileSrc='https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/315063553_1724460801288501_3151682870300255617_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=X0IUHpy9u3YAX_mbOf4&tn=xF3YaQNcJkctlD0a&_nc_ht=scontent.fdad2-1.fna&oh=00_AfAMFe2uKNMIBYLEr1AxwyBh3LH4mM1fSjVXloBLfYBKdQ&oe=63FD11CF'
                title='nhật quang'

            />
            <Story
                images='https://static-images.vnncdn.net/files/publish/2023/1/1/anh-1-1270.jpg'
                profileSrc='https://cdn.haitrieu.com/wp-content/uploads/2022/06/Logo-Thanh-Pho-Da-Nang.png'
                title='DaNangpage'

            />
            <Story
                images='https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg'
                profileSrc='https://vietnambusinessinsider.vn/uploads/wp-content/uploads/2020/09/photo-1-1591608743918269485412-3-0-409-650-crop-1591608784339-63727299329027.jpg'
                title='Theanh28'

            />
            <Story
                images='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
                profileSrc='https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png'
                title='Narutal'

            />
            <Story
                images='https://znews-photo.zingcdn.me/w660/Uploaded/ebhuiwh/2022_11_01/Aventador_zing_1.jpg'
                profileSrc='https://imgd.aeplcdn.com/1056x594/n/cw/ec/130211/apache-160-right-front-three-quarter-2.jpeg?isig=0&q=75'
                title='Troll Xe'

            />


        </div>
    )
}

export default StoryFeed