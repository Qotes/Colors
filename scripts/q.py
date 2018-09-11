# -*- coding: utf-8 -*-


import requests as q
import re
from subprocess import call


headers = {
    'Pragma': 'no-cache',
    'Origin': 'http://nipponcolors.com',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'en,zh-CN;q=0.9,zh;q=0.8',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',  # noqa
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Cache-Control': 'no-cache',
    'X-Requested-With': 'XMLHttpRequest',
    'Cookie': 'rotationArray=80%2C78%2C60%2C96%2C38%2C58%2C29%2C167%2C112%2C54%2C202%2C210%2C157%2C181%2C66%2C113%2C244%2C224%2C109%2C86%2C198%2C146%2C172%2C152%2C77%2C185%2C98%2C18%2C162%2C116%2C100%2C241%2C194%2C160%2C84%2C233%2C219%2C118%2C145%2C73%2C171%2C95%2C32%2C70%2C24%2C103%2C188%2C19%2C71%2C42%2C110%2C20%2C195%2C26%2C179%2C15%2C216%2C22%2C41%2C129%2C140%2C142%2C122%2C82%2C49%2C207%2C62%2C13%2C68%2C217%2C104%2C240%2C59%2C139%2C64%2C93%2C237%2C0%2C123%2C57%2C45%2C223%2C91%2C238%2C249%2C8%2C5%2C212%2C35%2C48%2C94%2C177%2C191%2C204%2C3%2C236%2C159%2C74%2C6%2C225%2C31%2C117%2C213%2C101%2C239%2C28%2C182%2C226%2C33%2C46%2C40%2C87%2C11%2C134%2C72%2C10%2C144%2C83%2C221%2C173%2C131%2C65%2C108%2C61%2C9%2C115%2C50%2C174%2C169%2C53%2C151%2C197%2C163%2C120%2C36%2C153%2C141%2C214%2C130%2C166%2C1%2C164%2C231%2C14%2C25%2C51%2C27%2C168%2C128%2C246%2C89%2C228%2C67%2C178%2C37%2C81%2C4%2C97%2C227%2C184%2C136%2C132%2C127%2C21%2C211%2C155%2C176%2C106%2C121%2C30%2C242%2C124%2C189%2C218%2C133%2C200%2C7%2C149%2C111%2C137%2C148%2C186%2C102%2C192%2C85%2C138%2C235%2C88%2C201%2C209%2C245%2C55%2C75%2C114%2C76%2C23%2C232%2C229%2C125%2C92%2C247%2C105%2C190%2C175%2C52%2C39%2C135%2C63%2C183%2C205%2C187%2C34%2C143%2C2%2C215%2C196%2C154%2C203%2C248%2C56%2C158%2C234%2C119%2C206%2C90%2C170%2C220%2C47%2C156%2C69%2C161%2C150%2C165%2C44%2C17%2C222%2C107%2C180%2C12%2C16%2C126%2C208%2C79%2C230%2C199%2C243%2C99%2C43%2C193%2C147; rotationNumber=7',  # noqa
    'Connection': 'keep-alive',
    'Referer': 'http://nipponcolors.com/'
}

payload = {
    'color': 'TAIKOH'
}


res = q.get('http://nipponcolors.com')
res.encoding = 'uft-8'
print('status', res.status_code, res.encoding)


reg = re.compile(r'<div><a href="javascript:void\(0\);">((.+), (.+))?</a></div>')
reis = reg.finditer(res.text)


ost = '{"colors": ['

rei = next(reis)
while True:
    kanji, roma = rei[2], rei[3]
    payload['color'] = roma
    res = q.post('http://nipponcolors.com/php/io.php', headers=headers, data=payload)
    print(kanji, roma, res.text)
    ost += '{"name":"' + roma + '","kanji":"' + kanji + '","color":' + res.text + '}'
    try:
        rei = next(reis)
        ost += ','
    except StopIteration:
        break

ost += ']}'


with open('src/colors.json', 'wt', encoding='utf-8') as outfile:
    outfile.write(ost)


call(['node', 'scripts/p.js'])
