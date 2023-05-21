'use strict'
    ; (function () {
        let timelineList = document.querySelector('#timeline ul')
        let moreBtn = document.querySelector('#timeline button')
        let initIndex = 7
        let count = 4
        let data = [
            {
                url: 'javascript:;',
                src: '../img/pota.jpeg',
                date: '2015',
                content: 'POTA AR MORUDYAN',
            },
            {
                url: 'javascript:;',
                src: '../img/gallery_1.jpg',
                date: '2016',
                content: 'ANUPAM ROY',
            },
            {
                url: 'javascript:;',
                src: '../img/na-layak.jpeg',
                date: '2017',
                content: 'SPUNK & NALAYAK',
            },
            {
                url: 'javascript:;',
                src: '../img/shilajit.jpeg',
                date: '2018',
                content: 'SHILAJIT',
            },
            {
                url: 'javascript:;',
                src: '../img/prithbi.jpeg',
                date: '2019',
                content: 'PRITHIBI',
            },
            {
                url: 'javascript:;',
                src: '../img/Anupamroy.jpeg',
                date: '2022',
                content: 'ANUPAM ROY',
            },
            {
                url: 'javascript:;',
                src: '../img/qustion.jpeg',
                date: '2023',
                content: 'COMING SOON',
            }
        ]

        function setTimeLineItem(target, obj, index) {
            let li = document.createElement('li')
            let template = `
                <a style="text-decoration:none;"
                    href="${obj.url}"
                    style="animation-delay:${index * 0.5}s;">
                    <div class="pic">
                        <img
                            src="${obj.src}"
                            alt=""
                        />
                    </div>
                    <div class="txt">
                        <h3>${obj.date}</h3>
                        <p>
                            ${obj.content}
                        </p>
                    </div>
                </a>
                <div
                    class="line"
                    style="animation-delay:${index * 0.5}s;">
                </div>`
            li.innerHTML = template
            target.append(li)
        }
        function clickMore() {
            let ary = data.slice(initIndex, initIndex + count)
            ary.forEach((obj, index) => {
                setTimeLineItem(timelineList, obj, index + 1)
            })
            initIndex = initIndex + count
            if (initIndex > data.length) {
                this.style.display = 'none'
            }
        }

        data.slice(0, initIndex).forEach((obj, index) => {
            setTimeLineItem(timelineList, obj, index + 1)
        })
        moreBtn.addEventListener('click', clickMore)
    })()