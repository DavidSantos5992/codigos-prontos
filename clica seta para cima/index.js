            if (keyName == 'ArrowUp') {
                
                app.lastMessageIndex++
                let found = 0
                let table = []
                for (i=0;i < app.chat.length && found < 10; i++) {
                    if(app.chat[i].sender == app.userInfo.name) {
                        found++
                        table.unshift(app.chat[i])
                    }
                }

                console.log(JSON.stringify(table))
                console.log('tamanho', table.length)

                console.log(app.lastMessageIndex)
                if(this.lastMessageIndex > table.length) return
                this.chatMessage = table[app.lastMessageIndex -1].message
            }
