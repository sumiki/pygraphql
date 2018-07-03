
## Graphql + GAE webapp2

pip install graphene-gae -t ./libs

pip install jinja2 -t ./libs


## Query

http://localhost:8080/graphiql

```
{
    human(id: "1000") {
      name
    }
}
```
