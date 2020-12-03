<template>
  <div>
    <h1>{{ fields.title }}</h1>
    <prismic-image :field="fields.logo"/>
    <prismic-rich-text :field="fields.richContent"/>
  </div>
</template>

<script>

export default {
  data () {
    return {
      fields: {
        title: null,
        logo: null,
        richContent: null
      }
    };
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('home')
        .then((document) => {
          this.fields.title = document.data.title;
          this.fields.logo = document.data.logo;
          this.fields.richContent = document.data.rich_content;
        })
    }
  },
  created () {
    this.getContent();
  }
}
</script>