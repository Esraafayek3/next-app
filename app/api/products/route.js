let products = [];

export async function GET(request) {
  try {
    if (!products.length) {
      const res = await fetch("https://fakestoreapi.com/products");
      products = await res.json();
    }

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}


export async function POST(request) {
  try {
    const body = await request.json();

    const newProduct = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      ...body,
    };
    products.push(newProduct);

    return new Response(JSON.stringify(newProduct), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to add product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}


export async function PUT(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get("id"));
    const body = await request.json();

    const index = products.findIndex((p) => p.id === id);
    if (index === -1) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
      });
    }

    products[index] = { ...products[index], ...body };

    return new Response(JSON.stringify(products[index]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to update product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}


export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get("id"));

    const index = products.findIndex((p) => p.id === id);
    if (index === -1) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
      });
    }

    const deleted = products.splice(index, 1);

    return new Response(JSON.stringify(deleted[0]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to delete product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
