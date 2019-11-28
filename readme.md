# ReactJS + Django Todo Project

ReactJS와 Django를 이용한 Todo Project입니다.   
여기서는 backend 폴더의 항목과 frontend 항목의 패키지 설치가 모두 필요합니다.  
각자 서버를 실행하고 서로 통신하도록 구성되어있습니다.    
  
설치에 필요한 코드는 아래와 같습니다. 

```bash
# 파이선 환경을 생성합니다.
$ python -m venv env

# 윈도우 사용자 경우
$ source env/scripts/activate
# MAC OS 경우
$ source env/bin/activate

# 패키지 설치 
$ pip install -r ./backend/requirements.txt

# 마이그레이트 
$ python ./backend/manage.py makemigrations
$ python ./backend/manage.py migrate

# 프론트 엔드 설치
$ cd frontend/
$ yarn install

# 프론트엔드 시작
$ yarn start

# 백엔드 시작
$ cd ..
$ cd backend/
$ python manage.py runserver
```