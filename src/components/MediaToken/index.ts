export const resolvers = {
  Mutation: {
    buildMediaToken(_parent, args: { appId: string, expiredTs: number }, _context, _info) {
      const currrentTs = Math.floor(Number(new Date()) / 1000);
      return {
        token: args.appId,
        startTs: currrentTs,
        expiredTs: currrentTs + args.expiredTs
      };
    }
  }
};
