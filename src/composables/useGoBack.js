import router from '@/router'

export default function useGoBack() {
  let pathArray = router.currentRoute.value.path.split('/')
  if (pathArray.length > 2) {
    pathArray.pop()
    let newPath = pathArray.join('/')
    router.push(newPath)
  }
}
