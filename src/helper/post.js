import ReactMarkdown from 'react-markdown'

let _posts = __POSTS__.map(file => {
  let [path, name] = file.split('/')
  return {path, name}
})

let _cache = {}

export function postList(path) {
  return _posts.filter(file => file.path === path).map(file => file.path + '/' + file.name)
}

export function getPost(key) {
  return new Promise((resolve, reject) => {
    if (_cache[key]) {
      return resolve(_cache[key])
    }

    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          return resolve(_cache[key] = xhr.responseText)
        }
        return reject(xhr.status)
      }
    }
    xhr.open('GET', __POSTS_DIR__ + key)
    xhr.send()
  })
}
