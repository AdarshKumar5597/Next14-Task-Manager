export const authConfig = {
    pages: {
      signIn: "/login",
    },
    providers: [],
    callbacks: {
      // FOR MORE DETAIL ABOUT CALLBACK FUNCTIONS CHECK https://next-auth.js.org/configuration/callbacks
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
          token.isAdmin = user.isAdmin;
          token.isUser = user.isUser;
          token.isThirdPerson = user.isThirdPerson;
        }
        return token;
      },
      async session({ session, token }) {
        if (token) {
          session.user.id = token.id;
          session.user.isAdmin = token.isAdmin;
          session.user.isUser = token.isUser;
          session.user.isThirdPerson = token.isThirdPerson;
        }
        return session;
      },
      authorized({ auth, request }) {
        const user = auth?.user;
        const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
        const isOnStatsPanel = request.nextUrl?.pathname.startsWith("/statistics");
        const isOnTaskPage = request.nextUrl?.pathname.startsWith("/task");
        const isOnAddPage = request.nextUrl?.pathname.startsWith("/add");
        const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
  
        // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
  
        if (isOnAdminPanel && !user?.isAdmin) {
          return false;
        }
  
        // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
  
        if (isOnTaskPage && !user) {
          return false;
        }


        // ONLY AUTHENTICATED USERS CAN REACH THE ADD PAGE

        if (isOnAddPage && !user) {
          return false;
        }


        // ONLY ADMIN CAN REACH THE STATS PAGE
        if (isOnStatsPanel && !user?.isAdmin) {
          return false;
        }

  
        // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
  
        if (isOnLoginPage && user) {
          return Response.redirect(new URL("/", request.nextUrl));
        }
  
        return true
      },
    },
  };
