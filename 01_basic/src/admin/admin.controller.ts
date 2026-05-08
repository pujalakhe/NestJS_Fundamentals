import { Controller } from '@nestjs/common';

// @Controller({ host: 'admin.example.com' })
@Controller({ host: ':account.example.com' })
export class AdminController {
  //   @Get()
  //   index() {
  //     return 'Admin page';
  //   }
  //   @Get()
  //   getInfo(@HostParam('account') account: string) {
  //     return account;
  //   }
  // *********dynamic sub host with @HostParam**********
  //   @Get()
  //   home(@HostParam('account') account: string) {
  //     return `Tenant: ${account}`;
  //   }
  //   @Get('info')
  //   info(@HostParam('account') account: string) {
  //     return { account, message: 'Tenant info' };
  //   }
  // *********dynamic sub host with route param @Param**********
  //   @Get('users/:id')
  //   getUser(@HostParam('account') account: string, @Param('id') id: string) {
  //     return {
  //       account,
  //       userId: id,
  //       message: ' Subdomain + Dynamic Route Params (@Param())',
  //     };
  //   }
}
