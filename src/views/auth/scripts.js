import { Loading } from '../../components'

export default {
  components: {
    Loading
  },

  data () {
    return {
      teste: 'a',
      loading: false
    }
  },

  methods: {
    authWithFacebook () {
      this.loading = true
      setTimeout(() => {
        this.$router.push({ 'name': 'StudentQRCode' })
      }, 1500)
    }
  }
}
